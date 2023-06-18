import React from 'react';
import {render} from '@testing-library/react-native';
import HomeCard from '../src/components/HomeCard';

describe('HomeCard', () => {
  const campaign = {
    data: {
      campaignTitle: 'Campaign Title',
      coverImage: 'https://example.com/cover-image.jpg',
      targetFunding: 5000,
      currentFundedAmount: 2500,
    },
  };

  it('renders campaign information correctly', () => {
    const {getByText} = render(
      <HomeCard campaign={campaign} title={undefined} />,
    );

    const titleElement = getByText('Campaign Title');
    expect(titleElement).toBeDefined();

    const targetElement = getByText('Target');
    expect(targetElement).toBeDefined();

    const raisedElement = getByText('Raised');
    expect(raisedElement).toBeDefined();

    const toGoElement = getByText('To Go');
    expect(toGoElement).toBeDefined();
  });

  it('displays correct progress percentage', () => {
    const {getByText} = render(
      <HomeCard campaign={campaign} title={undefined} />,
    );

    const progressElement = getByText('50%');
    expect(progressElement).toBeDefined();
  });

  it('displays correct funding amounts', () => {
    const {getByText} = render(
      <HomeCard campaign={campaign} title={undefined} />,
    );

    const targetAmountElement = getByText('5,000');
    expect(targetAmountElement).toBeDefined();

    const raisedAmountElement = getByText('2,500 birr');
    expect(raisedAmountElement).toBeDefined();

    const toGoAmountElement = getByText('2,500 birr');
    expect(toGoAmountElement).toBeDefined();
  });
});
