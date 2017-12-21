import Chance from 'chance';
import actions from '../actions';

const chance = new Chance();

export const generateRandomTitle = () => ({
    title: chance.string(),
    type: actions.GENERATE_RANDOM_TITLE
});