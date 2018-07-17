import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as commentsActions from './../actions/index';
import './Content.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faStroopwafel,
    faUser,
    faClock,
    faComment,
    faEdit,
    faTimes,
    faReply,
    fas
} from '@fortawesome/free-solid-svg-icons';
import CommentItem from "./CommentItem";
import {library} from "@fortawesome/fontawesome-svg-core/index";
import LeaveComment from "./LeaveComment";

library.add(faStroopwafel, faUser, faClock, faComment, faEdit, faTimes, faReply, fas);

class Content extends Component {

    constructor(props) {
        super(props);
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount() {
        const {offset, count} = this.props.commentsEntity;
        this.props.commentsActions.fetchComments(offset, count);
    }

    loadMore() {
        const {offset, count} = this.props.commentsEntity;
        this.props.commentsActions.fetchComments(offset + 5, count);
    }

    render() {

        const {comments} = this.props.commentsEntity;

        return (
            <div className='content'>
                <p className='caption'>
                    <img className='header-img' src={require('./../assets/img/star.png')} alt='star'/>
                    <span>The Road to Home</span>
                </p>
                <p className='article-date gray-text '>June 18, 2015</p>
                <p>
                    Made last it seen went no just when of by. Occasional entreaties comparison me difficulty so
                    themselves. At brother inquiry of offices without do my service. As particular to companions
                    at
                    sentiments. Weather however luckily enquire so certain do. Aware did stood was day under
                    ask.
                    Dearest affixed enquire on explain opinion he. Reached who the mrs joy offices pleased.
                    Towards
                    did colonel article any parties.
                </p>
                <div className='with-img'>
                    <img className='article-img pull-left' src={require('./../assets/img/article-img.jpg')}
                         alt='road'/>
                    <span>Needed feebly dining oh talked wisdom oppose at. Applauded use attempted strangers now are middleton concluded had. It is tried no added purse shall no on truth. Pleased anxious or as in by viewing forbade minutes prevent. Too leave had those get being led weeks blind. Had men rose from down lady able. Its son him ferrars proceed six parlors. Her say projection age announcing decisively men. Few gay sir those green men timed downs widow chief. Prevailed remainder may propriety can and.  Now for manners use has company believe parlors. Least nor party who wrote while did.</span>
                    <p className='clearfix'></p>
                </div>
                <p>
                    We diminution preference thoroughly if. Joy deal pain view much her time. Led young gay
                    would
                    now state. Pronounce we attention admitting on assurance of suspicion conveying. That his
                    west
                    quit had met till. Of advantage he attending household at do perceived. Middleton in
                    objection
                    discovery as agreeable. Edward thrown dining so he my around to.
                </p>
                <p>
                    Sense child do state to defer mr of forty. Become latter but nor abroad wisdom waited. Was
                    delivered gentleman acuteness but daughters. In as of whole as match asked. Pleasure
                    exertion
                    put add entrance distance drawings. In equally matters showing greatly it as. Want name any
                    wise
                    are able park when. Saw vicinity judgment remember finished men throwing.
                </p>
                <p>
                    Too leave had those get being led weeks blind. Had men rose from down lady able. Its son him
                    ferrars proceed six parlors. Her say projection age announcing decisively men.
                </p>

                <div className='article-details gray-text'>
                      <span>
                          <FontAwesomeIcon icon="user"/>
                          <span>Post by Will Smith</span>
                      </span>
                    <span>
                          <FontAwesomeIcon mask={['fas', 'circle']} icon="clock" flip="horizontal"/>
                          <span>Posted June 18, 2015 at  21:14</span>
                      </span>
                    <span>
                          <FontAwesomeIcon data-prefix='far' icon="comment"/>
                          <span>12 comments</span>
                      </span>

                    <div className="clearfix"></div>
                </div>

                <LeaveComment/>
                {comments && comments.map((comment, i) =>
                    <CommentItem key={i} comment={comment}/>)
                }

                {this.props.commentsEntity.hasMore && <div className='load-more'>
                    <button type='button' className='load-more-btn' onClick={this.loadMore}>load more comments</button>
                    <hr className='horizontal-line'/>
                </div>}
            </div>
        )
    }
}

CommentItem.propTypes = {
    commentsEntity: PropTypes.shape({
        comments: PropTypes.array,
        count: PropTypes.number,
        offset: PropTypes.number,
        hasMore: PropTypes.bool,

    }),

    commentsActions: PropTypes.shape({
        fetchComments: PropTypes.func,
    })
};

CommentItem.defaultProps = {};

const mapDispatchToProps = (dispatch) => ({
    commentsActions: bindActionCreators(commentsActions, dispatch)
});

const mapStateToProps = state => {
    return {
        commentsEntity: state
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);