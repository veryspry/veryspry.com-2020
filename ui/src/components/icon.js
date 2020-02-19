import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { space, width, height, position, borderRadius } from 'styled-system';

import { filterProps } from 'utils';

export default styled(filterProps(FontAwesomeIcon)(['borderRadius']))`
    margin: 0;
    padding: 0;
    ${height};
    ${width};
    ${space};
    ${position};
    ${borderRadius};
    &:hover {
        background-color: ${({ bg }) => (bg ? bg : null)};
    }
`;
