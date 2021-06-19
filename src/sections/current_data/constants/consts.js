/**
 * Constants for the current data page.
 */
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

export const ActiveBadge = withStyles((theme) => ({
  badge: {
    margin: '-2px',
    backgroundColor: '#44b700',
    color: '#44b700',
  },
}))(Badge);

export const InactiveBadge = withStyles((theme) => ({
  badge: {
    margin: '-2px',
    backgroundColor: '#EE4B2B',
    color: '#EE4B2B',
  },
}))(Badge);
