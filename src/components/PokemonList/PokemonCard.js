import React from 'react';
import { Image, Label, Grid, Icon } from 'semantic-ui-react';
import { MAIN_COLOR, FAV_COLOR, ICON } from '../../utils/constants';
import './styles.css';

export default function PokemonCard() {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className='PokemonCard'>
        <Icon name="favorite" color={FAV_COLOR}></Icon>
        <Image
          centered
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="pokemon image" />
        <p className='PokemonCard-title'>Dito</p>
        <Label color={MAIN_COLOR}>Normal</Label>
      </div>
    </Grid.Column>
  );
}
