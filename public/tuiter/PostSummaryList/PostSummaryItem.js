const PostSummaryItem = (post) => {
  return `<li class="list-group-item">
            <div class="row wd-explore-story-container" style="padding-top: 3px; padding-bottom: 3px;">
                <div class="col-10" style="font-size: 13px;">
                    <div class="text-muted">${post.topic}</div>
                    <div class="">
                        <b>${post.userName}</b>&nbsp;
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                        <span class="text-muted">&nbsp;- ${post.time}</span>
                    </div>
                    <div class="">
                    <b>
                        ${post.title}
                    </b>
                    </div>
                </div>
                <div class="col-2 
                            wd-explore-feed-img-container 
                            wd-flex-and-center" 
                     style="display: flex;
                            justify-content: center;
                            align-items: center;">
                    <img
                        src=${post.image}
                        class="wd-explore-feed-img"
                        style=" height: 60px;
                                width: 60px;
                                display: block;
                                border-radius: 5px;
                                object-fit: cover;"
                        alt=""
                    />
                </div>
            </div>
        </li>`;
};
export default PostSummaryItem;
