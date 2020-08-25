import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Star from '@material-ui/icons/Star'
import StarHalf from '@material-ui/icons/StarHalf'
import yellow from '@material-ui/core/colors/yellow'

const useStyles = makeStyles({
    root: {
        justifyContent: 'flex-end'
    }
})

const ProductRating = ({rating, sold, alignRight}) => {
    const classes = useStyles()
    const starsComponent = []

    const modulus = rating % 1 //4.7 => 0.7
    const ratingCountFloor = Math.floor(rating) //4.6 => 4

    for(let i=0; i<ratingCountFloor; i++){
        starsComponent.push(<Star key={i} style={{fontSize: 12, color: yellow[800] }} /> )
    }

    if(rating >= 0.5) {
        starsComponent.push(<StarHalf key={"star-half"} style={{fontSize: 12, color: yellow[800] }} />)
    }

    return (
        <Grid
            container
            alignItems="center"
            className={clsx({[classes.root]: alignRight})}
        >
            {starsComponent}
            <Typography variant="caption">
                {`(${sold})`}
            </Typography>
        </Grid>
    )
}

ProductRating.propTypes = {
    rating: PropTypes.number.isRequired,
    sold: PropTypes.number.isRequired,
    alignRight: PropTypes.bool
}

export default ProductRating
