import React from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from './Datalayer'

function Sidebar() {

    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className = "sidebar">
            <img 
                className = "sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
                alt=""
            />
            <SidebarOptions title = "Home" Icon = {HomeIcon}/>
            <SidebarOptions title = "Search" Icon = {SearchIcon}/>
            <SidebarOptions title = "Your Library" Icon = {LibraryMusicIcon}/>
            {/* vertical margin */}
            <br />
            <strong className = "sidebar__title">PLAYLISTS</strong>
            {/* horizontal breaking line */}
            <hr />

            {playlists?.items?.map(playlists => (
                <SidebarOptions title = {playlists.name} />
            ))}

        </div>
    )
}

export default Sidebar
