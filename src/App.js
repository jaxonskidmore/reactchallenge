import Tweet from "../components/tweet";
import "./styles.css";

export default function App() {
  /* EDIT ME SO I CONTAIN ALL OF THE DATA
   * THAT IS RENDERED FOR EACH TWEET
   */
  const tweets = [];
  tweets.push(
    <Tweet
      imgSource="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/SDKTYGJZKRPD7DKBJVBH73QNYI.jpg"
      imgAlt="Lady Gaga in a large pink dress"
      tweetText="No sleep, bus, club, another club, another club, another club, plane, next place, no sleep, another club, another club…"
      profileName="Lady Gaga"
      username="@ladygaga"
      date="31 May 2017"
      isVerified={true}
    />
  );
  tweets.push(
    <Tweet
      imgSource="https://www.rawlings.com/dw/image/v2/BBBJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw82199b5e/products/ROMLB-1.jpg?sw=800&sfrm=png&bgcolor=ebebeb"
      imgAlt="Baseball"
      tweetText="Braves win World Series Game 3"
      profileName="MLB"
      username="@MLB"
      date="29 October 2021"
      isVerified={true}
    />
  );
  tweets.push(
    <Tweet
      imgSource="https://bdc2020.o0bc.com/wp-content/uploads/2021/05/https___assets.bwbx_.io_images_users_iqjWHBFdfxIU_iWystM5vkIcM_v1_piFq5T3pJF0qzS8rF9LjsWaQ_-1x-1-609071110442d.jpg"
      imgAlt="Dave Portnoy"
      tweetText="One bite, everyone knows the rules"
      profileName="elPrez"
      username="@elPrez"
      date="20 October 2021"
      isVerified={false}
    />
  );
  /* EDIT ME SO I DISPLAY A COLUMN OF TWEETS */
  return tweets;
}
