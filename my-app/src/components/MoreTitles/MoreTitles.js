import React from "react";
import '../../App.css'
import './MoreTitles.css';


let arr=[
    "https://occ-0-3973-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVzN0S-KRp5ZsZZImUrFudjcjRzsg56WWOHKnu8y0TUbmlXrOj2ekX6ytGo-OhXyvjhOBcjF37wwaRTHl-zjGHvsQZgcddmnVDS6.jpg?r=7b1",
    "https://occ-0-3973-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZSd3EsOoioS8TixS0tBk1y0DfuwSuNJPaWw8JilLVS9vCHrocJfVJsWCGe7FokiwrGJysU4Mc-KqEbLdyfis3wD-e1ScRhio3SE.jpg?r=296",
    "https://occ-0-3973-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABR0E-raOU2lcjALkmqwfLmb5rwtav9jaIgZeJPJJ75vIFSoE1lN3LVsg3BnKaaChx0jqbLs7DyTMC-ppnWENRkrAJcAh_yT1OcU.jpg?r=340",
    "https://occ-0-3973-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdVozig2u8iR0NKqtv2lR888eLN6X8Exwx0wUT1zMMYAuRqc5x3oBq63k5SfbNvwnDRKBUhx-e21qjVNRlCu7lmAZpKIr15QARY.jpg?r=d58",
    "https://occ-0-3973-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZmoRk9SFdfJMoJRPjTqxJ1ykF55I2hc85v4XvtLAT53kv0A8cHEkYP2FHHO4KZGvTeBBGqTdA3ua8je14cZ1fOeWdOVz_XsEWs.jpg?r=c10",
    "https://occ-0-3973-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABegzMwmh5NzZ6W1s50xCqxRTNETbBrKBTN4yq83O14AoieCjVZlBJbdUJpnSJEhvu9F7ldV-yU3DIYL7f6u0-Bu80siH1HXxDRK4.jpg?r=1ff",
    "https://occ-0-3973-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdvuLs3iMxiE_YpY3vucWXi-mcM86CWKocINqVX8qvrG5Cjk7nwGZ1cTtu2HzfxVmh7qrXoHCoRDHlYUHUMygCH1NWisnYgnLSHz.jpg?r=62a",
    "https://occ-0-3973-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRstgvu88TlZ50EOK7lW9GiXc8GfoakjXXMKHi_4lMyMakNAWpWmQGUea_uY-AHMXitBSFQeIKp6LaiHFlS4Kw7LV21cLTknp9mX.jpg?r=2e9",
    "https://occ-0-3973-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVlyP9QSzmSxDyZT97TZJmqptn-ys0uW5XSZu0EhjQLVUGOMv06zvS821sOyAQFCU6bHGVWCl9o4gjO_BEl_FZtA5x3lFXq9RKDK.jpg?r=2bc",
    "https://occ-0-3973-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcojtWxmOG4PxmUEEKMWZh01IR9Pe7ji2Rpso1DniXXJFBrDlezz4YY6tQmBI3wfVBKelukC2Aq-PsPFsGFvM-vC5j6HiFgTmFxh.jpg?r=de8",
    "https://occ-0-3973-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWJJDXuWUFz5sHjm30jSf8renQqD3cZbWRpYrFYobVUCbKfLwzIR1-biMPdVp6DwcAYm11RTy1LmEoE2sYNqdbXJ7Qyf1hbewXUP.jpg?r=a59",
    "https://occ-0-3973-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXNwJ-vB1mflJuHFw_6OYFqWUfvKOgveaXdVnBDQH9r2-rbDsMEuj3WDg4rzU4GaSuqwuMP6bMelTzZdVd-95tuIqJVNLgA5dsQv.jpg?r=e5b"
];

function MoreTitles(){
    return(
        <section className="section-common">
            <div className="titles-heading">
                <h3>More Like This</h3>
            </div>
            <div className="titles-grid-container">
                {arr.map((template)=>{
                    return (
                    <div className="grid-components"><img src={template} alt=""/></div>
                    )
                })}
            </div>
        </section>
    )
}

export default MoreTitles;