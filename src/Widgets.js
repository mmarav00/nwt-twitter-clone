import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's new?</h2>
        <TwitterTweetEmbed tweetId={"1345720658907566080"} />

        <TwitterTimelineEmbed
          sourcetype="profile"
          screenName="TheAn1meMan"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/marin.maravic"}
          options={{ text: "#erendidnothingwrong", via: "marinmaravic" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
