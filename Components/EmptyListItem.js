import { Text, View } from 'react-native';

function EmptyListItem({isError}) {
  return(<View style={{width: '100%', marginTop: 10}}><Text style={{textAlign: 'center'}}>
  {isError === null ? '' : (isError ? 'Error occured while loading data. Pull down to refresh' :
            'No items available. Pull down to refresh') }</Text></View>);
}

export default EmptyListItem;
