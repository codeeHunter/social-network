import { connect } from "react-redux";
import Sidebar from "./Sidebar";

const mapStateToProps = (state) => ({
    sidebar: state.sidebar,
});

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
