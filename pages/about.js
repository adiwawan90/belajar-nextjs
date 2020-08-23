import Link from 'next/link';
import Avatar from '@material-ui/core/Avatar';

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>Helloini About yaaa</p>
            <Avatar alt="anim" source="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/0097415ec5f5cebc3861aca6782e8fb775c4acc9_full.jpg" />
            <Link href="/index" >
                <a>Menuju Home Page</a>
            </Link>
        </div>
    )
}

export default About;