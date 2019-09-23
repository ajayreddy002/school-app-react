import React, { Component } from 'react';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, Fab } from '@material-ui/core';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import '../branch/branches.scss';
import AddIcon from '@material-ui/icons/Add';
export default class BranchDetails extends Component {
    public state: any;
    constructor(props: any) {
        super(props)
        this.state = {
            branchData: [
                { id: 1, branch_name: 'Punjagutta', address: 'Hyderabad' },
                { id: 2, branch_name: 'Punjagutta', address: 'Hyderabad' },
                { id: 3, branch_name: 'Punjagutta', address: 'Hyderabad' },
            ]
        }
    }
    render() {
        return (
            <div className="bmain_block">
                <div className="branche_txt">
                    <h3>List of branches</h3>
                    <Fab href="/addbranch" className="btn" variant="extended" color="primary" aria-label="add">
                        <AddIcon /> Add branch
                    </Fab>
                </div>
                <Paper>
                    <Table className="table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Branch Name</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Actions</TableCell>
                                {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.branchData.map((item: any) =>
                                <TableRow key={item.id}>
                                    <TableCell className="content" component="th" scope="row">
                                        {item.branch_name}
                                    </TableCell>
                                    <TableCell className="content">{item.address}</TableCell>
                                    <TableCell>
                                        <div className="btn_block">
                                            <Fab size="small" color="primary"><VisibilityRoundedIcon fontSize="small" className="table_icon" /></Fab>
                                            <Fab size="small" color="primary"><EditRoundedIcon fontSize="small" className="table_icon" /></Fab>
                                            <Fab size="small" color="secondary"><HighlightOffRoundedIcon fontSize="small" className="table_icon" /></Fab>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}