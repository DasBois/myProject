import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
  texts = [];
  newText = '';
  itemCount = 0;
  info;
  name = 'No Class Selected';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.info = this.navParams.get('info');
    if(this.info != undefined){
      this.texts = this.info.comments;
      this.name = this.info.teacherName;
    }
  }

  addPost() {
    this.texts.push(
      {
        text: this.newText,
        likes: 0
      }
    );
    this.newText = '';
    this.itemCount = this.texts.length;
  }

  likePost(likedPost) {

      if(likedPost.likes==0){
        likedPost.likes += 1
      }
    
      console.log(likedPost.likes)
      console.log("Hello World")
      // sort likedPosts
      this.texts = this.texts.sort((a, b) => {
        if (a.likes > b.likes) {
          return -1;
        }
        if (a.likes < b.likes) {
          return 1;
        }
        return 0;
      })
    console.log(this.texts);
    
    
    
  }

  // const da = new Date(){}
  // const a = da.getHours() + ':'+da.getMinutes()
  
}