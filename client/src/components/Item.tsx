import { Paper, styled } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f3e5f5',
    ...theme.typography.body2,
    padding: theme.spacing(0.2),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));

export default Item