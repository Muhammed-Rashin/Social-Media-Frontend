import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { PersonAdd, Settings, Logout } from '@mui/icons-material';
import {
  Tooltip,
  Avatar,
  IconButton,
  Divider,
  ListItemIcon,
  MenuItem,
  Menu,
} from '@mui/material';
import image from '../../assets/dummyData/images/profile-1.jpg';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <nav>
        <div className='container'>
          <h2 className='logo'>Social Media</h2>
          <div className='search-bar'>
            <i className='uil uil-search' />
            <input type='search' placeholder='Search For Something..' />
          </div>
          <div className='create'>
            <label className='btn btn-primary' htmlFor='create-post'>
              Create
            </label>
            <div>
              <Tooltip title='Account settings'>
                <IconButton
                  onClick={handleClick}
                  size='small'
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 38, height: 38 }} src={image} />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id='account-menu'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <Link to='/profile' className='link'>
                  <MenuItem>
                    <Avatar src={image} />
                    Profile
                  </MenuItem>
                </Link>
                <MenuItem>
                  <Avatar />
                  My account
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <PersonAdd fontSize='small' />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize='small' />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize='small' />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
