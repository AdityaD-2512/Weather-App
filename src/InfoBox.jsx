import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import SevereColdRoundedIcon from '@mui/icons-material/SevereColdRounded';
import ThunderstormRoundedIcon from '@mui/icons-material/ThunderstormRounded';
import "./InfoBox.css";

export default function InfoBox({info}){
    let INIT_URL = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    let HOT_URL = "https://media.istockphoto.com/id/824800468/photo/sun-on-blue-sky-with-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=Slo8PLbmJmONDCBRazEkAwLj1LEqLb8AGmG82uyW0uI=";
    let COLD_URL = "https://plus.unsplash.com/premium_photo-1670347627514-07a3d37e0670?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2VhdGhlciUyMGNvbGR8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";


    return(
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={
                    info.humidity > 80 ? RAIN_URL : 
                    info.temp > 15 ? HOT_URL : COLD_URL             //checking weather  conditions and displaying appropriate image

                }
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <h2>{info.city} {info.humidity > 80 ? <ThunderstormRoundedIcon/> : 
                    info.temp > 15 ? <WbSunnyRoundedIcon/> : <SevereColdRoundedIcon/> }</h2>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component = {"span"}> {/*to fix <p> error we add component */}
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>Max Temp = {info.tempMax}&deg;C</p>
                <p>The Weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    );
}