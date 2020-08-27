import React from 'react'
import PropTypesfrom from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import AccordionDetails from '@material-ui/core/AccordionActions'
import Typography from '@material-ui/core/Typography'
import ExpansionMoreIcon from '@material-ui/icons/ExpandMore'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'

const useStyle = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(2)
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular
    }
}))

const ProductInfoPanel = ({judul, content}) => {
    const classes = useStyle()

    return (
        <div className={classes.container}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpansionMoreIcon/>}
                    aria-control="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        {judul}
                    </Typography>
                </ExpansionPanelSummary>
                <AccordionDetails>
                    <Typography>
                        {content}
                    </Typography>
                </AccordionDetails>
            </ExpansionPanel>
        </div>
    )

}

export default ProductInfoPanel