import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import theme from 'theme'

import ProductRating from '@common/components/ProductRating'
import {currencyFormatter} from '@utils/currency'
import PromoCard from '@common/components/PromoCard'
import ProductInfoPanel from '@common/components/ProductInfoPanel'

const useStyles = makeStyles((theme) => ({
    container: {
        marginBottom: theme.spacing(8)
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    productInfo: {
        marginTop: theme.spacing(2)
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    }
}))

const ProductDetailCard = ({ img, title, price, rating, sold, desc, qty, condition, weight, promo }) => {
    const classes = useStyles()
    const [expanded, setExpanded] = useState(true)

    const handleExpendClick = () => {
        setExpanded(!expanded)
    }

    return (
        <div className={classes.container}>
            <Card>
                <CardMedia 
                    className={classes.media}
                    image={img}
                    title={title}
                />
                <CardContent>
                    <Typography variant="h5" component="h1" gutterBottom>
                        {title}
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={6} sm={6}>
                            <Typography variant="button" color="secondary">
                                {currencyFormatter(price)}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <ProductRating rating={rating} sold={sold} alignRight />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} className={classes.productInfo}>
                        <Grid container direction="column" justify="center" item xs={3} sm={3}>
                            <Typography align="center" variant="overline" >
                                Berat
                            </Typography>
                            <Typography align="center" avriant="button">
                                {weight}
                            </Typography>
                        </Grid>

                        <Grid container direction="column" justify="center" item xs={3} sm={3}>
                            <Typography align="center" variant="overline" >
                                Kondisi
                            </Typography>
                            <Typography align="center" avriant="button">
                                {condition}
                            </Typography>
                        </Grid>

                        <Grid container direction="column" justify="center" item xs={3} sm={3}>
                            <Typography align="center" variant="overline" >
                                Stock
                            </Typography>
                            <Typography align="center" avriant="button">
                                {qty}
                            </Typography>
                        </Grid>

                        <Grid container direction="column" justify="center" item xs={3} sm={3}>
                            <Typography align="center" variant="overline" >
                                Terjual
                            </Typography>
                            <Typography align="center" avriant="button">
                                {sold}
                            </Typography>
                        </Grid>

                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center" alignItems="center">
                        <IconButton 
                            onClick={handleExpendClick}
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded
                            })}
                            >
                            <ExpandMoreIcon />
                        </IconButton>
                    </Grid>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph variant="subtitle2">
                            Deskripsi
                        </Typography>
                        <Typography paragraph variant="body2">
                            {desc}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
            <PromoCard promo={promo} />
            <ProductInfoPanel judul="Product Info 1" content="Product 1. Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Suspendise malesuadalacus ex,
                        sit amet blandit leo lobortis eget." />
            <ProductInfoPanel judul="Product Info 2" content="Product 2. Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Suspendise malesuadalacus ex,
                        sit amet blandit leo lobortis eget." />
            <ProductInfoPanel judul="Product Info 3" content="Product 3 . Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Suspendise malesuadalacus ex,
                        sit amet blandit leo lobortis eget." />
        </div>
    )
}

ProductDetailCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    sold: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
    condition: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    promo: PropTypes.array.isRequired
}

export default ProductDetailCard