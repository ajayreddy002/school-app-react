import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import { authenticationService } from '../../_services/authService';
import { Avatar, Badge } from '@material-ui/core';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
export default function UserMenu(props: any) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const userData = JSON.parse(props.currentUser);
    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }
    function logoutUser() {
        authenticationService.logout();
        handleClose();
    }
    return (
        <div>
            <div className="menu_block">
                <Badge className="badge" badgeContent={4} color="primary">
                    <EmailRoundedIcon color="primary" />
                </Badge>
                <Badge className="badge" badgeContent={2} color="error">
                    <NotificationsRoundedIcon color="primary" />
                </Badge>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <span className="name">{userData.user_name}</span>
                    <Avatar alt="Remy Sharp" className="bigAvatar"><AccountCircleRoundedIcon /></Avatar>
                </Button>
            </div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem className="action_text" onClick={handleClose}><FaceRoundedIcon color="primary" className="icon" />Profile</MenuItem>
                <MenuItem className="action_text" onClick={handleClose}><AccountCircleRoundedIcon color="primary" className="icon" />My account</MenuItem>
                <MenuItem className="action_text" onClick={logoutUser}><ExitToAppRoundedIcon color="action" className="icon" />Logout</MenuItem>
            </Menu>
        </div>
    );
}