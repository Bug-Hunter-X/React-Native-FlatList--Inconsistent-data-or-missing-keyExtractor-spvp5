In this example, we create a unique key based on the item's index in the data array.  If your items have unique IDs, you should use that instead. For more efficiency, use the unique ID if you have it.

```javascript
// FlatListBugSolution.js
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const DATA = Array.from({ length: 10 }, (_, i) => ({ id: i, title: `Item ${i}` }));

const App = () => {
  const [data, setData] = useState(DATA);

  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()} // Use the unique id or a unique key
    />
  );
};

export default App;
```