import React from 'react';
import { TabNavigation, Tab, toaster } from 'evergreen-ui';
import { listMenu } from './List';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// bagian ini merupakan Tab Menu akan ditampilkan ketika masuk halaman Home

export default () => {
    const menuTitle = useSelector(state => state.menu)
    const logout = () => {
        localStorage.clear()
        toaster.notify(
            'Good bye',
            {
                duration: 5
            }
        )
    }
    return (
        <TabNavigation>
            {listMenu.map(menu => (
                <Tab key={menu.key} id={menu.key} isSelected={menu.title === menuTitle}>
                    <Link to={menu.url} style={{textDecoration: 'none'}}>{menu.title}</Link>
                </Tab>
            ))}
            <Tab key={0} id={0} onSelect={logout}>
            <Link to='/' style={{textDecoration: 'none'}}>Logout</Link>
            </Tab>
        </TabNavigation>
    )
}