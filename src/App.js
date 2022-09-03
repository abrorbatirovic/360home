import './App.css';
import {Pannellum} from 'pannellum-react'
import img from './PANO_20220903_171110_3.jpg'

function App() {
    return (
        <div>
            <Pannellum
                width="100%"
                height="100vh"
                image={img}
                pitch={10}
                yaw={180}
                hfov={110}
                autoLoad
                showZoomCtrl={false}
                showFullscreenCtrl={false}
            />

        </div>
    );
}

export default App;
