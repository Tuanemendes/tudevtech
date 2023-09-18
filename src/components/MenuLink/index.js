import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './MenuLink.module.css'


const MenuLink = ({children, start}) => {

	return (
			<NavLink 
				className={({isActive}) => `
				${styles.link}
				${isActive ? styles.linkDetached: ""}
				`} 
				to={start} 
				end
				>
					{children}
			</NavLink>
		)
}

export default MenuLink
