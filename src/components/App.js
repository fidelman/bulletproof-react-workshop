// @flow

import type {Story as StoryType} from '../story';
import React from 'react';
import AddStoryContainer from './AddStoryContainer';
import Spinner from './Spinner';
import Story from './Story';

type Props = {|
  +loading: boolean,
  +stories: $ReadOnlyArray<StoryType>,
  +onVote: (id: string) => mixed,
  +onAddStory: (body: string) => mixed,
|};

export default function App(props: Props) {
  if (props.loading) return <Spinner />;
  return (
    <div>
      {props.stories.map(story => (
        <Story
          key={story.id}
          id={story.id}
          votes={story.votes}
          body={story.body}
          onVote={props.onVote}
        />
      ))}
      <AddStoryContainer onAddStory={props.onAddStory} />
    </div>
  );
}
