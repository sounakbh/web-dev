const PostSummaryItem = (post) => {
  return `<li class="list-group-item" 
                style="border: 1px solid rgba(255,255,255,.25);;
                        background-color: black; border-radius:none">
            <div class="row">
                <div class="col-1">
                    <img src=${post.avatarImage} alt="" 
                    style="margin-top: 10px;
                            width: 150%;
                            border-radius: 50%;" />
                </div>

                <div class="col-11" style="padding-left:15px;">
                    <div>
                        <span>
                            <b>${post.author}</b> 
                            <i class="fa fa-check-circle" aria-hidden="true"></i> 
                        </span>
                        <span class="text-muted">
                            @${post.userName} - 
                            ${post.time}
                        </span>
                        <span style="float:right">&#183;&#183;&#183;</span>
                    </div>
                    <div>
                        ${post.title}
                    </div>
                    <div class="mt-2">
                        <img
                            src=${post.postImageUrl}
                            style="border-radius: 15px 15px 0 0;
                                    width:100%;
                                    height: 400px;
                                    object-fit: cover;"
                            alt=""
                        />
                        ${
                          post.postContent
                            ? `
                            <div class="pt-2" style=" padding: 10px;
                                            border-radius: 0 0 10px 10px;
                                            border: 1px solid rgba(255,255,255,.25);
                                            border-top:none;">
                                    ${post.postContent.postHeading} <br />
                                    <span class="text-muted">
                                        ${post.postContent.postContent} <br />
                                        <i class="fa fa-link" aria-hidden="true"></i> ${post.postContent.postSiteLink}
                                    </span>
                                </div>`
                            : ""
                        }
                        
                        <div class="p-2 d-flex justify-content-between text-muted">
                            <i class="fa fa-comment" aria-hidden="true" style="font-weight:300;">
                                <span style="margin-left: 5px;">${
                                  post.numberOfComments
                                }</span>
                            </i>
                            <i class="fa fa-retweet" aria-hidden="true">
                                <span style="margin-left: 5px; font-weight:100;">${
                                  post.numberOfRetweets
                                }</span>
                            </i>
                            <i class="fa fa-heart" aria-hidden="true" style="font-weight:100;">
                                <span style="margin-left: 5px;">${
                                  post.numberOfLikes
                                }</span>
                            </i>
                            <i class="fa fa-upload" aria-hidden="true" style="font-weight:600;">
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </li>`;
};
export default PostSummaryItem;
