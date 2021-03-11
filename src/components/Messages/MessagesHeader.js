import React from "react";
import { Header, Segment, Input, Icon } from "semantic-ui-react";

class MessagesHeader extends React.Component {
  render() {
    const {
      channelName,
      numUniqueUsers,
      handleSearchChange,
      searchLoading,
      isPrivateChannel,
      handleStar,
      isChannelStarred,
      messages
    } = this.props;

    return (
      <Segment clearing className='messages__header'>
        <Header
          fluid='true'
          as='h2'
          style={{ marginBottom: 0, textAlign: "left" }}
        >
          <span className='responsive-title'>
            {channelName}
            {!isPrivateChannel && (
              <Icon
                onClick={handleStar}
                name={isChannelStarred ? "star" : "star outline"}
                color={isChannelStarred ? "yellow" : "black"}
                style={{ cursor: "pointer" }}
              />
            )}
          </span>
          <Header.Subheader>{numUniqueUsers}</Header.Subheader>
        </Header>
        <Header floated='right'>
          <Input
            className='search__input'
            loading={searchLoading}
            size='mini'
            icon='search'
            name='searchIcon'
            placeholder='Search Messages'
            onChange={handleSearchChange}
          />
        </Header>
      </Segment>
    );
  }
}

export default MessagesHeader;
