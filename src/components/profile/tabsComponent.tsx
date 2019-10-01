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
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
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
                    </div>
                    <div className="tool_bar">
                        <div className="icon_block">
                            <SettingsApplicationsRoundedIcon />
                        </div>
                    </div>
                </div>
                <div className="personal">

                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Account Information
            </TabPanel>
            <TabPanel value={value} index={2}>
                Account Information
            </TabPanel>
        </div>
    );
}
