import React from 'react';
import '../../App.css';
import './Banner.css';

function Banner(){        

    let titleLogo="https://occ-0-3973-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUdml3O5OcE_i1muzCeX_0Ii0B__REITIOWIPC8KygVjS0OhtOSWF6iG1GMcc0J0QJqIUtqBNbUNmHgHsNAptpnifpaQ24YgqGU18Ge2BvXx.png?r=d80";
    let bannerDesktop="https://occ-0-3973-3663.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWAMLUsz8h3hS2PVFfgHsYAcdlVbumkpMR_-eU-iKtIqgRFzkOfLy6vom6LNyc9ZLXTKUbchQfzaBk1Ug4kpCymENGOt5c4MwiYX.jpg?r=adb"
    let bannerMobile="https://occ-0-3973-3663.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABc5lonXxJh5Lr4zp-qbszAt1k82tHeJMeDlN3cVL_3JaAPgrvL0sVsRSglnIFK4n9NlnWeWvY8gIlWlQnGOoEi2HgqwaR9KDAyBW.jpg?r=591"
    
    return(
        <section className='section-common banner-section'>

        <div className='banner-container'>
            <div className='info-container'>
                <div className='title-logo-container'>
                    <img alt='title-logo' src={titleLogo}/>
                </div>                    
                <div className='details-container'>
                    <div className='m-title'>The 5th Wave</div>
                    <div className='m-metadata'>
                        <span>Year</span>
                        <span className='pipe'>|</span>
                        <span className='age'>Age</span>
                        <span className='pipe'>|</span>
                        <span>Duration</span>
                        <span className='pipe'>|</span>
                        <span><a>Category</a></span>
                    </div>
                    <div className='m-description'>After four waves of destruction turn Earth into a wasteland, a teen desperate to find her brother teams with a stranger to prepare for the fifth.</div>
                    <div className='m-cast'><span className='cast'>Starring : </span><span>Chloë Grace Moretz,Nick Robinson,Ron Livingston</span></div>
                </div>
            </div>
            <div className='banner-image-container'>
                <div className='banner-image-desktop' >
                    <img className='banner-image-desktop'  alt='banner-image-desktop' src='' style={{"background-image":`url(${bannerDesktop})`}} />
                </div>
                <div>
                    <img className='banner-image-mobile' alt='banner-image-mobile' src={bannerMobile}/>                    
                </div>
                <div className='banner-fade-left'></div>                            
            </div>
        </div>
        <div className='banner-fade-bottom'></div>
        </section>
    )
}

export default Banner;