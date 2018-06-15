import Realm from 'realm'

class Post extends Realm.Object{}

Post.schema = {
    name : 'Post',
    primarykey : 'postId',
    properties : {
        postId : {type : 'int'},
        title : 'string',
        body : 'string',
        author : 'string',
        views : 'int',
        likes : 'int'
    }
}

export default new Realm({schema : [Post]})