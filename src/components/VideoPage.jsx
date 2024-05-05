import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import App from '../App';
function VideoPage() {
  const {id} = useParams()

  const roomID = id
  console.log(roomID);
  let myMeeting = async (element) => {
 // generate Kit Token
  const appID = 1987890024;
  const serverSecret = "fbe54ce1af51aabf5dd70acc47a5ba18";
  const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), 'bishal');


 // Create instance object from Kit Token.
  const zp = ZegoUIKitPrebuilt.create(kitToken);
  // start the call
  zp.joinRoom({
    container: element,
    sharedLinks: [
      {
        name: 'Copy link',
        url:
         window.location.protocol + '//' + 
         window.location.host + window.location.pathname +
          '?roomID=' +
          roomID,
      },
    ],
    scenario: {
      mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
    },
  });


};
  return (
    <div
      className="myCallContainer bg-zinc-900 " ref={myMeeting} style={{ width: '100vw', height: '100vh' }}
    ></div>
  )
}

export default VideoPage