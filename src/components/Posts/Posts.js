import React from "react";
import "./posts.css";

import profile from "../../assets/dummyData/images/profile-14.jpg";
import feed from "../../assets/dummyData/images/feed-1.jpg";
// import profile from "../../assets/dummyData/images/profile-14.jpg";

function Posts() {
  return (
    <div>
      <div className="feeds">
        <div className="feed">
          <div className="head" />
          <div className="user">
            <div className="profile-pic">
              <img src={profile} alt="" />
            </div>
            <div className="info">
              <h3>Lana Rose</h3>
              <small>Dubai, 15 MINUTES AGO</small>
            </div>
            <span className="edit">
              <i className="uil uil-ellipsis-h" />
            </span>
          </div>

          <div className="photo">
            <img src={feed} alt="" />
          </div>

          <div className="action-button">
            <div className="interaction-button">
              <span>
                <i className="uil uil-thumbs-up" />
              </span>
              <span>
                <i className="uil uil-comment" />
              </span>
              <span>
                <i className="uil uil-share" />
              </span>
            </div>
            <div className="bookmark">
              <span>
                <i className="uil uil-bookmark" />
              </span>
            </div>
          </div>

          <div className="liked-by">
            <span>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
            </span>
            ,
            <p>
              Liked by
              <b>Enrest Achiever</b>
              snd
              <b>220 others</b>
            </p>
          </div>

          <div className="caption">
            <p>
              <b>Lana Rose</b>
              Lorem ipsum dolor storiesquiquam eius.
              <span className="hash-tag">#lifestyle</span>
            </p>
          </div>
          <div className="comments text-muted">View all 130 comments</div>
        </div>

        {/* Second Feed */}

        <div className="feed">
          <div className="head" />
          <div className="user">
            <div className="profile-pic">
              <img src={profile} alt="" />
            </div>
            <div className="info">
              <h3>Lana Rose</h3>
              <small>Dubai, 15 MINUTES AGO</small>
            </div>
            <span className="edit">
              <i className="uil uil-ellipsis-h" />
            </span>
          </div>

          <div className="photo">
            <img src={feed} alt="" />
          </div>

          <div className="action-button">
            <div className="interaction-button">
              <span>
                <i className="uil uil-thumbs-up" />
              </span>
              <span>
                <i className="uil uil-comment" />
              </span>
              <span>
                <i className="uil uil-share" />
              </span>
            </div>
            <div className="bookmark">
              <span>
                <i className="uil uil-bookmark" />
              </span>
            </div>
          </div>

          <div className="liked-by">
            <span>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
            </span>
            ,
            <p>
              Liked by
              <b>Enrest Achiever</b>
              snd
              <b>220 others</b>
            </p>
          </div>

          <div className="caption">
            <p>
              <b>Lana Rose</b>
              Lorem ipsum dolor storiesquiquam eius.
              <span className="hash-tag">#lifestyle</span>
            </p>
          </div>
          <div className="comments text-muted">View all 130 comments</div>
        </div>

        {/* Third Feed */}

        <div className="feed">
          <div className="head" />
          <div className="user">
            <div className="profile-pic">
              <img src={profile} alt="" />
            </div>
            <div className="info">
              <h3>Lana Rose</h3>
              <small>Dubai, 15 MINUTES AGO</small>
            </div>
            <span className="edit">
              <i className="uil uil-ellipsis-h" />
            </span>
          </div>

          <div className="photo">
            <img src={feed} alt="" />
          </div>

          <div className="action-button">
            <div className="interaction-button">
              <span>
                <i className="uil uil-thumbs-up" />
              </span>
              <span>
                <i className="uil uil-comment" />
              </span>
              <span>
                <i className="uil uil-share" />
              </span>
            </div>
            <div className="bookmark">
              <span>
                <i className="uil uil-bookmark" />
              </span>
            </div>
          </div>

          <div className="liked-by">
            <span>
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
            </span>
            <span>
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
            </span>
            <span>
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
            </span>
            ,
            <p>
              Liked by
              <b>Enrest Achiever</b>
              snd
              <b>220 others</b>
            </p>
          </div>

          <div className="caption">
            <p>
              <b>Lana Rose</b>
              Lorem ipsum dolor storiesquiquam eius.
              <span className="hash-tag">#lifestyle</span>
            </p>
          </div>
          <div className="comments text-muted">View all 130 comments</div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
