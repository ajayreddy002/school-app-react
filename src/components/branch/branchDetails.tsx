import React, { Component } from 'react';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, Fab } from '@material-ui/core';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import '../branch/branches.scss';
import AddIcon from '@material-ui/icons/Add';
import BranchServices from '../../_services/branchServices';
import { toast } from 'react-toastify';
export default class BranchDetails extends Component {
    public state: any;
    constructor(props: any) {
        super(props)
        this.state = {
            branchData: []
        }
        this.getBranchData = this.getBranchData.bind(this);
    }
    componentDidMount(){
        this.getBranchData();

    }
    getBranchData = () => {
        const localData: any = localStorage.getItem('currentUser');
        const Id = JSON.parse(localData);
        BranchServices.getBranchData(`branch/${Id.school_id}`)
            .then((data: any) => {
                this.setState({
                    branchData: data.data.branchDetails
                })
            }).catch(err => {
                console.log(err);
            })
    }
    deleteBranch(branch: any): void {
        BranchServices.deleteBranch(`branch/${branch._id}`)
            .then(data => {
                if (data.data.success === false) {
                    toast.error(`Token not valid`, {
                        position: 'bottom-center',
                        draggable: false,
                        hideProgressBar: true,
                        autoClose: 5000
                    });
                } else {
                    toast.success(`Branch deleted successfully`, {
                        position: 'bottom-center',
                        draggable: false,
                        hideProgressBar: true,
                        autoClose: 5000
                    });
                    this.getBranchData();
                }
            }).catch(e => {
                console.log(e);
            })
    }
    render() {
        return (
            <div className="bmain_block">
                <div className="branche_txt">
                    {this.state.branchData !== undefined && this.state.branchData.length > 0 &&
                        <h3>List of branches</h3>
                    }
                    <Fab href="/addbranch" className="btn" variant="extended" color="primary" aria-label="add">
                        <AddIcon /> Add branch
                    </Fab>
                </div>
                {this.state.branchData !== undefined && this.state.branchData.length > 0 &&
                    <Paper>
                        <Table className="table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Branch Name</TableCell>
                                    <TableCell>Address</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Actions</TableCell>
                                    {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.branchData !== undefined && this.state.branchData.map((item: any) =>
                                    <TableRow key={item._id}>
                                        <TableCell className="content" component="th" scope="row">
                                            {item.branch_name}
                                        </TableCell>
                                        <TableCell className="content">{item.branch_address}</TableCell>
                                        <TableCell className="content">{item.user_name}</TableCell>
                                        <TableCell className="content">{item.email}</TableCell>
                                        <TableCell>
                                            <div className="btn_block">
                                                <Fab size="small" color="primary"><VisibilityRoundedIcon fontSize="small" className="table_icon" /></Fab>
                                                <Fab size="small" color="primary"><EditRoundedIcon fontSize="small" className="table_icon" /></Fab>
                                                <Fab size="small" color="secondary" onClick={() => this.deleteBranch(item)}><HighlightOffRoundedIcon fontSize="small" className="table_icon" /></Fab>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </Paper>
                }
                {this.state.branchData !== undefined && this.state.branchData.length === 0 &&
                    <p>No branches create one</p>
                }
            </div>
        )
    }
}