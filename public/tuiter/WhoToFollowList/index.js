import WhoToFollowListItem from "./WhoToFollowListItem.js";
import Who from "./Who.js";

const styles = {};

const WhoToFollowList = () => {
  return `
        <ul class="list-group">
            ${Who.map((listItem) => WhoToFollowListItem(listItem)).join("")}
        </ul>
`;
};
export default WhoToFollowList;
