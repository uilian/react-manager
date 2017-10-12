import { NavigationActions } from 'react-navigation';

export const resetNavigation = (routeName) => {
    return (
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName })
        ]
      })
    );
  };

