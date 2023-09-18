import React from 'react'
import styles from './MenuLink.module.css'
import { Link, useLocation } from 'react-router-dom'

const MenuLink = ({children, start}) => {

const location = useLocation();

	return (
			<Link className={`${styles.link} ${ location.pathname === start ? styles.linkDetached: ""}`} to={start}>{children}</Link>
		)
}

export default MenuLink
