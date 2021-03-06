import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../Components/styles/Pict/logo.png';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import SortIcon from '@material-ui/icons/Sort';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

export default class Navbar extends Component {
  render() {
    return (
      <>
        <AppBar position='static' className='appbar'>
          <Toolbar
            style={{
              color: 'white',
              justifyContent: 'center',
              backgroundColor: 'white',
              minWidth: '50%',
              fontFamily: 'Roboto sans-serif'
            }}
          >
            <img src={Logo} />
            <TextField
              id='input-with-icon-textfield'
              label='Search'
              variant='outlined'
              name='search'
              value={this.props.search}
              onChange={this.props.handleOnChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
              style={{ width: '15%' }}
            />
            <FormControl style={{ paddingLeft: '2rem' }}>
              <InputLabel style={{ paddingLeft: '3rem' }}>Filter:</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                name='search_by'
                value={this.props.search_by || 'Name'}
                onChange={this.props.handleOnChange}
              >
                <MenuItem value={'name'}>Name</MenuItem>
                <MenuItem value={'skill'}>Skill</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ paddingLeft: '2rem' }}>
              <InputLabel style={{ paddingLeft: '3rem' }}>Sort:</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                name='sort_by'
                value={this.props.sort_by || 'Name'}
                onChange={this.props.handleOnChange}
              >
                <MenuItem value={'name'}>Name</MenuItem>
                <MenuItem value={'skill'}>Skill</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ paddingLeft: '2rem' }}>
              <InputLabel style={{ paddingLeft: '3rem' }}>Item:</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                name='limit'
                value={this.props.limit || 5}
                onChange={this.props.handleOnChange}
              >
                <MenuItem value={'5'}>5</MenuItem>
                <MenuItem value={'10'}>10</MenuItem>
                <MenuItem value={'20'}>20</MenuItem>
                <MenuItem value={'50'}>50</MenuItem>
              </Select>
            </FormControl>
            <Button
              name='order'
              onClick={e => {
                e.target.name = 'order'
                e.target.value = 
                this.props.order == 'asc' ? 'desc' : 'asc' 
                this.props.handleOnChange(e);
              }}
            >
              <SortIcon
                color='primary'
                fontSize='large'
                className='homeIcon'
              ></SortIcon>
              
              {this.props.order}
            </Button>
            <Button
              onClick={() => {
                this.props.profilePage();
              }}
            >
              <AccountBoxIcon
                color='primary'
                fontSize='large'
                className='accountIcon'
              />
              {this.props.name || this.props.username}
            </Button>
            <Button
              onClick={() => {
                this.props.logout();
              }}
            >
              <MeetingRoomIcon color='primary' fontSize='large' />
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}
