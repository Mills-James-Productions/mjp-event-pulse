import {Grid} from "@material-ui/icons"

export function InfoGrid(){
  
    return (
        <Grid item={true} md={5} alignItems="flex-start">
        <h4>Streaming Support Information</h4>
        <p>
        Event pages work on most major browsers on Windows and macOS. We
        recommend using Google Chrome, Mozilla Firefox, or Safari when viewing
        a stream from your computer. It’s best to update your browser whenever
        possible. 
        </p><p> 
        Live video streamed is also viewable on most iOS and Android
        mobile browsers. When you arrive at the event page, click the play
        button on the player in the browser to open the live player. The same
        applies to any event whose live player is embedded on a different
        website. 
        </p><p> 
        <h4>System Requirements:  </h4>
        <ul> 
        <li>Windows 7 or higher</li>
       <li> Mac OS X 10.6 or higher </li> 
       </ul>
       <h4> Supported desktop browsers:  </h4>
        <ul> 
          <li>  Google Chrome 45+</li>
          <li> Mozilla Firefox
        49+</li>
          <li>  Safari 10+</li>
          <li>  Microsoft Edge 15+</li>
          <li> **Internet Explorer 11 - requires
        Flash plugin to be installed </li>
          </ul>
          <h4> Supported mobile browsers:  </h4>  
          <ul>
          <li>Chrome 45+ </li>
        <li>  Safari 10+ (iOS) </li>
        </ul>
         Internet Connection: 5-10mbps download speed is
        recommended. Check your connection at www.speedtest.net.
        
        </p>
        </Grid>
       
    );
  };