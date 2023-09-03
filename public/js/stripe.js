import axios from 'axios';

export const bookTour = async (tourId) => {
  console.log('Here');
  const stripe = Stripe(
    'pk_test_51N27W5IElcfS77CFwLBzbzdx4mLaQdveCBP0x5xIjomExsXYvTcxScXV3j867LPr2a8UJbDQ9XKNdkL7hmg9Vysc00IxD3oJuw'
  );

  //get the session from api
  const session = await axios(`/api/v1/bookings/check-out/${tourId}`);
  console.log(session);

  await stripe.redirectToCheckout({
    sessionId: session.data.session.id,
  });
};
