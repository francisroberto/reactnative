// Import a library
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
// Create a register compoinent

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => <Text>{ album.title }</Text>);
  }

  render() {
    return (
      <View>
        { this.renderAlbums() }
      </View>
    );
  }
}

// Make the component available to the other parts of the App

export default AlbumList;