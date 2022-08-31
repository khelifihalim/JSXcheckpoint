import thePic from './PicSrc.jpg';
const PicturSrcs = () => {
    return(
        <div>
            <div>
                <img src={thePic} alt=""/>
            </div>

            <div>
                <img style={{width:'350px' , heigth:'350px'}} src="/picturPub.jpg" alt=""/>
            </div>
            
        </div>
    )
}

export default  PicturSrcs;