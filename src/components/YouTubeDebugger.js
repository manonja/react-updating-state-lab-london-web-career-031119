// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    state = {
        
        errors: [],
        user: null,
        settings: {
        bitrate: 8,
        video: {
            resolution: '1080p'
        }
        }
    }

    handleClickBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: 12
            }
           
        })
    }

    handleClickResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                video: {
                    ...this.state.videos,
                    resolution: '720p'
                }
            }
            
        })
    }
    
    render() { 
        return ( 
            <div>
                <button 
                    className='bitrate'
                    onClick={this.handleClickBitrate}
                ></button>  

                <button 
                    className='resolution'
                    onClick={this.handleClickResolution}
                ></button>       
            </div>
            
        );
    }
}
 
export default YouTubeDebugger;