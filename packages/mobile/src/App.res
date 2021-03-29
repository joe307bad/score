open ReactNative

@module("@score/foo")
external insertPost: ReactNative.Event.pressEvent => unit = "foo"

type post = {
  id: int,
  title: string,
}

@react.component
let make = (~allPosts: array<post>) => {
  <View>
    <Button title="Add Post" onPress={insertPost} />
    <FlatList
      renderItem={post => <Text> {post.item.title |> React.string} </Text>}
      keyExtractor={(post, _) => post.id |> Belt.Int.toString}
      data={allPosts}
    />
  </View>
}
