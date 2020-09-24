import React from 'react'
import { Button, Divider, Grid, Segment } from 'semantic-ui-react'
import { generateChoices } from '../modules/choices'

const PlayerButtons = () => (
  <Segment placeholder>
    <Grid columns={2} relaxed="very" stackable>
      <Grid.Column>
        <Button
          data-cy="Player 1"
          onClick={generateChoices()}
          content="Player 1"
          primary
        />
      </Grid.Column>

      <Grid.Column verticalAlign="middle">
        <Button content="Player 2" primary />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
);

export default PlayerButtons;
