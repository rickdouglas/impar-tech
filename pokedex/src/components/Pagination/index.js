import { Pagination } from "@mui/material";
import { Box } from "@mui/system";

export function AppPagination () {
    return (
        <Box 
            justifyContent={'center'} 
            alignItems="center" 
            display={'flex'}
            sx={{margin:"20px 0px"}}>
            <Pagination count={10}/>
        </Box>
    )
}