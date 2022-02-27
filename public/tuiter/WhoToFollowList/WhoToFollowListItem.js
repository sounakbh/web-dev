const WhoToFollowListItem = (who) => {
  return `<li class="list-group-item">
        <div class="row" style="font-size: 13px;"}>
            <div class="col-2" style="  display: flex;
                                        justify-content: center;
                                        align-items: center;">
                <img
                    style="height: 40px;
                    width: 40px;
                    object-fit: cover;"
                    class="rounded-circle"
                    src=${who.avatarIcon}
                    alt=""
                />
            </div>
            <div class="col-7" style="padding-left: 0px;">
                <b>${who.userName}</b> &nbsp;
                <i class="fa fa-check-circle" aria-hidden="true"></i><br />
                <span class="text-secondary">@${who.handle}</span>
            </div>
            <div class="col-3" style="display: flex;
                                    justify-content: center;
                                    align-items: center;">
                <div class="btn btn-primary btn-sm" style="border-radius: 25px;">Follow</div>
            </div>
        </div>
    </li>`;
};
export default WhoToFollowListItem;
