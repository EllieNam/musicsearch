import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Get you the moon', duration: '3:15' },
        { title: 'Same old songs', duration: '3:02' },
        { title: 'Freaking Out', duration: '3:57' },
        { title: 'Gold', duration: '3:10' }
    ];
};

const selectedSongReducer = (selectedSong=null,action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});