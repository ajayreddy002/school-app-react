import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded';
import '../profile/profile.scss';
import imageUploadIcon from '../../assets/images/student.png';
interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        minHeight: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));
function imageUpload(event: any) {
    event.preventDefault();
    console.log(event.target);
}
export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            {/* <div className="small_block">
                <p>Profile</p>
            </div> */}
            <div className={classes.root}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}>
                    <Tab label="Personal Information" icon={<AccountCircleIcon />} {...a11yProps(0)} />
                    <Tab label="Change Password" icon={<LockOpenRoundedIcon />} {...a11yProps(1)} />
                    <Tab label="Account Information" icon={<PersonOutlineRoundedIcon />} {...a11yProps(2)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <div className="header">
                        <div className="header_block">
                            <h3>Personal Information
                                <small>update your personal informaiton</small>
                            </h3>
                            <div className="icon_block">
                                <SettingsApplicationsRoundedIcon />
                            </div>
                        </div>
                    </div>
                    <div className="personal">
                        <h4>Info:</h4>
                        <div className="row">
                            <div className="col-md-3 label">
                                <label htmlFor="image">Avatar</label>
                            </div>
                            <div className="col-md-9">
                                <div className="profile_img">
                                    <img src={imageUploadIcon} alt="" />
                                </div>
                                <label htmlFor="upload_img" className="icon_label">
                                    <i className="fas fa-pen"></i>
                                    <input type="file" id="upload_img" accept=".png, .jpg, .jpeg" onChange={imageUpload} />
                                </label>
                            </div>
                        </div>
                        <div className="form_block">
                            <form>
                                <div className="row">
                                    <div className="col-md-3 label">
                                        <label htmlFor="name">Name: </label>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="name_block">
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 label">
                                        <label htmlFor="name">School Name: </label>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="name_block">
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 label">
                                        <label htmlFor="name">Email: </label>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="name_block">
                                            <input type="email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 label">
                                        <label htmlFor="branch_name">Branch Name: </label>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="name_block">
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className="header">
                        <div className="header_block">
                            <h3>Change Password
                                <small>change or reset your account password</small>
                            </h3>
                        </div>
                    </div>
                    <div className="personal">
                        <h4>Change Or Recover Your Password:</h4>
                        <div className="form_block p-0">
                            <form>
                                <div className="row">
                                    <div className="col-md-3 label">
                                        <label htmlFor="name">Current Password: </label>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="name_block">
                                            <input type="text" placeholder="Current Password" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 label">
                                        <label htmlFor="name">New Password: </label>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="name_block">
                                            <input type="text" placeholder="New Password" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 label">
                                        <label htmlFor="name">Verify Password: </label>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="name_block">
                                            <input type="email" placeholder="Verify Password" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="but_block">
                                <button type="button" className="reset">Reset</button>
                                <button type="button" className="cancel">Cancel</button>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Account Information
            </TabPanel>
            </div>
        </div>
    );
}
