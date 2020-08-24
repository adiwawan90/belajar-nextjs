import React from 'react'
import Link from 'next/link'
import {makeStyles} from '@material-ui/core/styles'
import AppBAr from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Head from 'next/head'

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2)
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBAr position="fixed">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <Link href="/">
                        <Typography variant="h6">
                            Ecommerce Frontend
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBAr>
        </div>

    )
}

export default Header