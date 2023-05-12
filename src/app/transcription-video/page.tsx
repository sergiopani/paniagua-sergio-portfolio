
import { Main } from "../../../components/ui";
import VideoPlayer from '../../../components/ui/videoPlayer/Video';
import { transcripcionVideo } from '../../../constants/transcription';

const TranscriptionPage = () => {
    return (
        <Main>
            <VideoPlayer videoSrc={transcripcionVideo.video} transcript={transcripcionVideo.transcriptionText} />
        </Main>
    );
};

export default TranscriptionPage;
