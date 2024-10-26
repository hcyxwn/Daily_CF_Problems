let records = `
current_date:2024-10-25
hum:2,64/1,1/2,6/1,1/2,5/1,1/2,19/1,1/2,3/1,1/2,17/1,1/2,5/1,1/2,3/1,3/2,7/1,1/2,1/0,1/2,4/1,3/2,3/1,4/2,2/0,1/2,2/1,1/2,1/0,1/1,1/2,1/0,2/1,1/2,3/1,2/2,2/1,3/0,1/1,1/2,1/0,1/2,1/1,2/0,6/2,2/1,1/2,2/0,1/2,1/1,1/2,1/1,3/2,2/1,3
tsreaper:2,209
lengli:2,158/1,1/2,25/1,1/2,7/1,1/2,16
sugar:1,1/0,208
lyxxys:1,1/0,50/2,3/1,1/2,9/1,2/2,1/1,2/2,1/1,1/2,11/1,1/2,5/1,1/2,1/1,1/2,25/1,1/2,32/1,1/2,5/1,2/2,4/1,1/2,5/1,1/2,1/0,1/2,3/1,1/2,3/1,1/2,1/1,1/2,5/1,2/2,7/1,1/2,2/1,1/2,4/1,1/2,5/1,1
mikeac:2,27/0,3/2,7/0,5/2,1/0,5/2,3/0,2/2,1/0,6/2,4/0,145
ncf:1,15/0,3/1,48/2,1/1,6/2,1/1,5/2,1/1,6/2,1/1,28/2,1/1,4/2,2/1,5/2,1/0,1/1,3/2,1/1,4/0,1/1,10/0,61
yawn_sean:2,209
grobycn:1,3/2,2/1,1/2,45/1,1/2,1/1,1/2,4/1,1/2,1/1,2/2,1/1,6/2,1/1,1/0,1/2,2/1,2/2,3/1,3/2,1/1,1/2,1/0,1/2,1/0,1/2,5/1,1/2,4/0,1/2,1/0,1/1,1/2,1/1,1/2,2/1,3/2,1/1,1/2,1/1,9/2,1/1,1/2,1/1,2/2,1/1,2/0,2/1,1/2,2/1,2/2,1/1,2/0,1/1,1/0,11/1,9/0,1/2,2/1,1/2,1/0,2/1,3/0,1/1,1/0,1/1,1/2,4/1,2/0,1/1,1/0,4/2,3/1,2/2,4/1,3/2,2/1,1/2,1/1,1/2,5
tauros:2,54/0,155
leoncn:1,1/2,1/1,1/2,2/1,1/2,3/1,4/2,1/1,1/2,11/1,4/2,3/1,2/2,2/1,2/2,1/1,2/2,4/1,2/2,7/1,1/2,2/1,1/2,4/1,5/2,1/1,1/2,1/1,7/2,5/1,1/2,3/1,3/2,3/1,1/2,11/1,1/2,1/1,1/2,2/1,10/2,4/1,1/2,5/1,21/2,1/1,19/2,8/1,1/2,5/1,1/2,1/1,5/2,2/0,1/2,1/1,3/0,10
md:1,2/0,2/1,2/0,3/1,6/2,8/1,1/2,3/1,3/2,20/1,1/2,1/1,2/2,4/1,1/2,5/1,1/2,6/1,1/2,3/1,1/2,1/1,1/2,3/1,3/2,5/1,1/2,5/1,1/2,1/1,5/2,1/1,1/2,1/1,3/2,1/1,1/2,1/1,1/2,4/1,4/2,4/1,20/0,1/1,2/0,1/1,27/0,1/1,8/0,1/1,4/0,1/1,4/0,1/1,14
retyrn:1,1/2,3/1,3/2,1/1,2/2,1/1,1/2,2/1,1/2,3/1,1/2,3/1,2/2,3/1,1/2,1/1,1/2,3/1,2/2,3/1,1/2,1/1,2/2,5/1,1/2,5/1,1/2,4/1,1/2,5/1,1/2,6/1,1/2,5/1,1/2,23/1,1/2,5/1,1/2,22/1,1/2,1/0,1/2,33/1,1/2,18/1,1/2,22/1,1
k423:2,1/0,1/2,1/0,3/2,4/0,1/2,63/0,134
linxiaotian:2,3/0,6/1,1/0,2/2,1/1,1/2,2/0,4/2,1/1,2/2,2/0,2/1,1/0,3/2,1/0,176
cc4414:1,1/2,3/1,1/0,44/1,1/0,11/1,1/0,2/1,1/2,2/0,3/1,1/0,4/1,1/0,8/2,1/1,1/0,1/1,2/2,1/1,4/2,1/0,8/2,1/0,104
jinyumantang:1,2/0,62/2,2/0,19/1,1/0,38/1,2/0,19/1,1/0,61
leander:1,1/0,1/1,2/2,1/0,14/2,1/0,187
dinghc:1,4/2,3/1,3/2,1/1,2/2,1/1,3/2,1/1,3/2,1/0,1/2,2/1,3/2,2/1,1/2,1/1,2/2,3/1,4/2,2/1,1/2,2/1,1/2,1/0,1/1,4/0,2/1,3/0,1/1,5/0,5/1,1/0,3/1,3/0,4/1,2/0,2/1,2/0,4/1,1/0,1/1,4/0,1/1,3/0,5/1,1/0,2/2,1/1,2/2,1/0,1/1,1/2,1/1,3/0,2/1,4/0,5/1,1/0,2/1,1/0,1/1,2/0,1/1,1/0,1/1,3/0,2/1,2/2,2/0,1/1,4/0,5/1,3/0,2/1,4/0,3/1,2/0,1/1,2/0,1/1,3/0,2/1,5/0,9/1,1/0,2/1,1/0,2/1,2/0,2/1,2
arrogant_sword:1,4/2,1/1,1/2,1/1,2/2,1/1,3/0,1/1,1/2,1/1,2/2,1/1,6/0,21/2,4/1,3/2,3/1,1/2,1/1,1/2,1/1,3/0,1/2,1/0,1/2,1/0,2/1,1/2,1/1,1/2,1/0,8/1,1/2,1/1,1/2,9/1,1/2,7/1,1/2,1/1,1/0,2/2,3/0,5/2,2/0,2/2,1/0,88
aging1986:1,1/0,62/2,2/0,141
hongrock:2,1/0,5/2,5/1,1/2,13/0,181
test:1,1/0,205
cpchenpi:1,1/0,204
jie_chen:1,1/0,202
retyn:1,1/0,202
rememorio:1,2/0,199
jokemaker:1,1/0,1/1,3/0,9/1,1/0,186
yefei162:1,1/0,10/2,1/1,2/0,1/1,1/2,2/1,17/2,1/1,4/2,1/1,4/0,1/1,3/2,1/1,1/2,1/1,6/2,1/1,1/2,1/1,1/2,1/1,5/2,1/1,8/2,2/1,2/2,1/1,6/2,2/1,4/2,1/1,7/0,2/1,5/2,2/1,6/0,1/1,2/0,8/1,1/0,2/1,1/0,69
yangsisi:1,1/0,53/1,1/0,146
fatalerror:1,1/0,20/2,4/1,2/2,4/1,1/0,1/2,3/0,3/2,2/0,1/2,2/1,1/2,6/0,6/2,4/0,2/2,1/0,16/2,2/0,11/2,2/0,9/2,1/0,9/2,1/0,4/2,1/0,2/2,1/0,3/2,1/0,14/2,1/0,6/2,3/0,49
ynotbbetter:2,15/0,184
gh123:1,2/0,2/1,1/0,5/1,1/0,1/1,1/0,2/1,2/0,2/1,1/0,2/1,2/0,1/1,3/0,3/1,1/0,2/1,1/0,1/1,1/0,2/1,1/0,1/1,2/0,1/1,3/0,1/1,1/0,1/1,4/0,4/1,5/0,1/1,1/0,1/1,1/0,2/1,1/0,1/1,1/0,6/1,1/0,1/1,5/0,1/1,1/0,2/1,1/0,3/1,4/0,2/1,1/0,2/1,1/0,3/1,1/0,10/1,1/0,1/1,2/0,2/1,1/0,1/1,2/0,2/1,4/0,2/1,1/0,2/1,1/0,8/1,1/0,1/1,2/0,2/1,4/0,2/1,4/0,3/1,1/0,4/1,1/0,1/1,2/0,2/1,4/0,3/1,1/0,4/1,2/0,1/1,1/0,2/1,3
sheepstick:2,54/0,15/2,9/0,119
nreyog:1,1/0,7/1,1/0,12/1,1/0,175
iron_buster:1,1/0,13/1,2/0,24/1,1/0,24/1,1/0,22/1,1/0,12/1,1/0,65/1,1/0,29
ggl:1,1/0,8/1,1/0,16/1,2/0,54/1,1/0,45/1,1/0,68
ku:1,2/0,1/1,9/0,1/1,3/0,3/1,3/0,1/1,1/0,1/1,2/0,10/1,1/0,5/1,1/0,1/1,2/0,7/1,2/0,12/1,2/0,10/1,1/0,4/1,1/0,1/1,3/0,1/2,1/1,2/0,4/1,1/0,1/1,1/0,5/1,1/0,1/1,1/2,1/0,1/1,2/0,5/1,1/0,3/1,1/0,28/1,4/0,5/1,1/0,11/1,1/0,12/1,1/0,11
harmonly:1,2/0,1/1,1/0,1/2,2/1,1/0,1/1,1/0,14/1,1/0,2/1,1/0,13/1,1/0,5/1,1/0,149
windly:1,4/2,2/1,11/2,1/1,5/0,173
djl777:2,1/0,4/2,1/0,83/2,1/0,5/2,1/0,35/2,2/0,4/2,1/0,5/2,1/0,52
toc:1,1/0,1/1,1/0,1/1,2/0,1/1,3/0,1/1,1/0,1/1,4/2,1/1,2/0,3/1,19/0,1/1,5/0,1/1,2/0,1/1,1/0,3/1,10/0,1/1,1/0,1/1,14/0,1/1,11/0,101
inhng:1,2/2,1/0,1/1,73/2,1/1,16/2,1/1,29/0,71
yss:1,1/0,194
deckedge:1,1/0,11/1,1/0,2/2,2/0,2/1,1/0,1/1,4/0,2/1,1/2,1/1,2/2,1/0,1/1,3/2,1/1,1/0,1/1,1/2,1/1,1/2,2/1,1/2,4/1,2/2,5/1,3/2,1/1,3/2,3/1,1/0,10/2,3/0,2/1,1/2,1/1,2/0,1/1,1/0,1/1,2/0,2/1,1/0,1/2,1/1,2/0,5/1,1/0,3/1,2/0,3/1,1/0,2/1,1/0,2/1,2/0,1/1,1/0,4/1,1/0,4/1,3/0,1/1,2/0,2/1,1/0,27/1,2/0,6/1,1/0,18
sprite:1,1/0,4/2,1/1,2/0,1/2,1/0,1/1,3/0,1/2,1/1,5/2,2/1,3/0,1/1,5/0,1/1,2/0,1/1,1/0,157
ldh:2,10/0,3/2,2/0,72/2,6/0,99
wink:1,4/2,1/0,2/1,8/0,4/1,4/0,8/1,1/0,1/1,1/0,1/1,2/0,51/2,1/0,103
octal2024:2,1/0,1/1,2/0,187
dwq:1,2/0,1/1,4/0,1/1,2/0,2/1,5/0,1/1,4/0,2/1,4/0,1/1,9/0,4/1,3/0,146
pdocw:2,1/1,36/0,17/1,4/0,44/1,2/0,16/1,6/0,65
wanderovo:2,4/1,2/2,1/1,5/2,1/1,4/2,4/1,5/2,1/1,3/2,4/1,1/2,1/1,1/2,3/1,1/2,1/1,2/2,2/1,2/2,5/1,3/2,1/1,1/2,1/1,1/2,3/1,2/2,8/1,1/2,1/1,1/2,1/1,1/2,1/1,1/2,3/1,1/2,2/1,1/2,2/1,1/2,5/1,1/2,1/1,1/2,1/1,3/2,1/1,12/2,1/1,2/2,5/1,1/2,1/1,2/2,1/1,4/2,1/1,4/0,1/1,4/0,1/1,11/2,1/1,2/2,2/1,3/2,3/1,3/2,2/1,1/2,4/1,1/2,1/1,1/2,1/1,1/2,1/1,1/2,1/1,1/2,5/1,1/2,1
override:1,52/2,1/1,18/2,1/1,26/0,2/1,1/0,90
hang:1,115/0,1/1,23/0,1/1,51
wangggong:1,1/0,3/2,1/0,5/2,2/1,1/0,1/1,2/2,1/1,1/0,1/1,1/0,2/1,1/0,3/1,1/0,4/1,3/0,1/1,2/0,12/1,4/0,3/2,1/0,1/1,1/0,3/1,2/0,2/1,4/0,23/1,1/0,95
goodluck_ccq:1,2/0,1/2,1/0,184
yskm-an:1,1/0,1/1,10/2,1/1,3/0,170
ranzhi:1,1/0,4/1,2/0,1/1,1/0,1/1,1/0,13/1,3/0,1/1,1/2,1/1,5/2,1/1,1/0,3/1,2/0,1/1,5/0,2/1,1/0,37/1,3/0,3/1,8/0,83
hopeworse:2,8/1,2/2,11/1,1/2,5/1,2/2,1/0,154
dwq_n:1,1/0,183
550n:1,4/0,1/1,1/0,121/2,2/1,2/0,53
subcrip:2,1/0,178
anonymous:1,1/0,3/1,1/0,173
lu_xz:1,1/2,2/1,1/2,3/1,1/0,1/1,1/0,4/1,1/0,3/2,9/1,1/2,1/1,1/0,4/2,5/0,1/2,9/0,6/2,1/0,2/2,3/0,1/2,8/0,18/2,1/0,88
yakultgo:1,1/2,29/0,1/2,5/0,1/2,3/0,1/2,6/0,2/2,4/0,1/2,6/0,1/2,3/0,1/2,1/0,1/2,11/0,2/2,9/0,2/2,1/0,1/2,3/0,1/2,2/0,1/2,2/0,9/2,1/0,6/2,1/0,32/2,2/0,1/2,2/0,1/2,2/0,1/2,4/0,1/2,3/0,1/2,5
windj0y:2,1/0,5/2,10/1,2/2,4/1,1/2,4/1,3/2,1/1,3/2,1/1,4/0,1/1,1/0,3/1,1/0,128
shawnqiang:1,2/0,37/1,1/0,3/1,1/0,128
zhangk33:1,1/2,1/0,170
mymsx:1,1/0,5/1,1/0,1/1,2/0,1/1,1/0,1/1,1/0,1/1,2/0,154
mrsuns:2,3/1,1/2,3/1,1/2,7/1,1/2,1/1,1/2,1/0,3/1,1/2,2/1,1/0,2/1,1/2,4/0,3/2,1/0,5/2,2/0,3/1,1/0,30/1,2/0,20/2,1/0,1/2,1/0,1/2,2/0,6/2,2/1,1/0,56
liketheflower:2,7/1,6/2,1/1,6/0,151
buxiang-qichuang:1,1/0,17/1,2/0,2/1,3/0,144
buxiang_qichuang:1,1/0,168
jy_xiaoying:2,2/1,2/0,11/1,28/0,1/1,1/0,1/1,7/0,2/1,1/0,12/1,2/0,1/1,1/0,10/1,1/0,1/1,2/0,8/1,1/0,2/1,1/0,1/1,1/0,3/1,1/0,1/1,1/0,4/1,1/0,1/1,2/0,31/1,1/0,2/1,2/0,4/1,1/0,1/1,7/0,1/1,1/0,2
lang:1,1/0,165
absndon2:1,1/0,165
anandon2:1,1/0,42/1,1/0,122
xylu:2,2/1,1/0,1/2,2/1,6/2,1/1,1/2,1/1,1/2,5/1,1/2,11/1,1/2,7/1,3/2,4/1,1/0,3/2,1/1,1/2,4/0,96/1,3/2,1/1,6/0,1
qiuuuuut:1,1/0,164
abandon2:2,13/1,1/0,1/2,7/1,1/2,4/0,1/2,5/0,1/1,1/2,3/1,1/0,1/2,2/1,1/2,2/0,1/2,1/1,1/2,1/1,1/2,1/0,1/1,2/2,2/0,4/2,2/1,1/2,8/0,11/2,4/1,2/2,1/0,76
qiuuuuuut:1,1/0,39/2,1/1,1/2,1/0,1/2,2/1,1/2,2/0,2/2,1/1,1/0,110
1zhao:2,1/1,1/2,1/1,1/2,2/0,37/1,1/0,35/1,1/2,2/1,4/0,4/1,1/0,13/2,1/0,2/1,2/0,54
yoonsica:2,6/0,63/2,2/0,1/2,2/1,1/0,3/2,4/1,1/0,1/2,1/0,66/2,3/0,3/2,1/0,3
smallboatc:2,1/1,1/0,2/1,2/0,87/1,1/0,67
amani:1,1/0,2/1,3/2,1/0,1/1,4/0,1/1,1/0,2/1,3/0,1/1,1/0,1/1,2/0,2/1,1/0,1/1,2/2,1/1,5/0,2/1,4/0,1/2,1/1,4/0,17/1,1/0,82/1,2/0,2/1,2/0,7
equinox:1,4/2,3/0,4/2,5/0,14/2,2/1,1/2,1/0,2/2,12/1,3/2,1/1,2/0,7/2,2/0,1/2,1/0,1/2,12/1,1/2,3/1,1/0,1/2,12/0,1/2,1/0,1/2,1/0,3/2,10/0,1/2,1/0,1/2,1/0,1/1,1/2,3/0,1/2,3/0,1/2,2/0,1/2,2/0,6/2,1/0,22
sjw712:2,2/0,101/2,10/1,1/2,17/0,1/2,8/0,1/2,5/1,1/2,2/0,1/2,5/0,6
cat丶:1,3/0,157
zongjy:2,3/1,2/2,1/1,1/2,1/0,1/1,1/2,4/0,3/2,1/1,1/2,1/0,140
empty_dust:2,3/0,11/2,1/1,1/0,1/2,1/0,1/1,1/0,139
octal:1,1/0,35/2,1/1,2/0,104/1,1/0,1/1,2/2,1/0,3/1,3/0,5
baozii:1,4/0,21/2,1/0,3/1,4/2,1/1,2/2,5/1,1/2,1/1,2/0,31/1,1/0,81
kokomi:2,1/1,1/2,2/1,1/2,1/0,2/2,4/1,1/0,1/2,1/0,35/2,1/1,2/0,97/2,1/0,1/2,3/1,2
baile:1,3/0,7/1,1/0,2/1,2/0,1/1,1/0,2/1,1/0,4/1,2/0,131
lu1no:2,1/0,35/1,1/2,1/0,44/2,2/1,4/0,69
little_j:1,1/0,156
minsongkang1:1,1/0,155
luchy0120:2,11/1,2/2,9/1,1/2,1/1,1/0,131
rui_er:2,12/0,143
lyxxyx:1,1/0,154
pandaomeng:1,1/0,1/1,1/2,1/1,1/0,1/1,4/0,13/1,1/0,131
djzzwx:1,1/2,1/0,4/2,4/1,2/2,3/1,1/2,1/0,1/2,3/0,3/2,3/0,3/2,1/0,1/2,3/0,2/2,1/0,4/2,1/1,1/2,1/0,110
if:1,16/2,1/1,31/0,72/1,1/2,1/1,5/0,2/1,2/0,5/1,1/0,1/1,1/0,1/1,1/0,1/1,3/0,1/1,3/0,1/1,1/0,1/1,2/0,1
lxcxz:1,1/0,25/1,1/0,128
37:1,1/0,8/1,1/0,21/1,1/0,122
zone:2,1/0,1/1,1/0,2/2,4/1,2/2,1/1,1/2,3/1,1/2,1/1,3/2,1/1,1/2,4/1,2/0,2/2,1/1,2/2,1/1,3/0,4/2,4/1,1/0,5/1,1/0,4/1,1/0,25/2,1/0,21/2,1/0,1/2,2/0,1/2,1/0,4/2,2/0,1/2,4/0,3/2,1/1,1/2,3/0,1/2,4/0,11/2,2/0,6
y_hc:1,3/0,3/1,1/0,48/1,1/0,64/1,1/0,33
slashteen:1,5/0,67/1,1/0,81
brusgry:2,1/0,152
banfenhaochi:1,2/0,34/1,1/0,5/1,1/0,5/1,1/0,5/1,2/0,95
rainmemery:1,1/0,149
pandoameng:1,1/0,149
xyz_herry:1,2/0,2/1,3/0,14/1,1/0,128
dawnmagnet:2,1/0,6/2,2/0,46/2,1/0,9/2,1/0,10/2,1/0,72
lazysheep:1,11/0,37/1,1/0,5/1,1/0,23/2,1/0,1/1,2/0,20/1,2/0,45
buer:1,1/2,1/1,1/2,1/1,1/0,1/2,3/1,1/2,1/1,1/0,1/2,3/0,9/2,3/0,1/1,3/0,5/2,1/1,3/0,66/1,1/0,41
kangminsong0:1,1/0,1/1,1/0,145
limerence:1,1/2,2/1,1/2,2/0,1/1,1/0,2/1,1/0,1/1,1/0,1/1,2/0,1/1,1/0,1/1,1/0,4/1,1/0,119
cming:2,2/0,22/1,1/0,118
pangyou3s:1,1/0,141
jerry66:2,1/0,11/2,1/0,4/2,2/0,4/2,1/0,10/2,1/0,16/1,1/0,89
lengnian7:1,1/0,5/1,1/2,2/0,128
openmi:1,6/0,1/1,9/0,17/1,4/2,2/1,4/0,6/1,15/2,1/1,6/0,15/1,1/0,50
kurtis:2,3/1,9/2,1/1,1/0,2/1,1/2,2/0,2/1,2/2,2/1,12/2,5/1,6/0,89
echo:1,2/0,1/1,2/0,16/1,1/0,114
rocky:2,2/0,134
cxhscst2:2,3/0,1/2,3/1,1/2,1/1,3/2,1/1,6/0,34/1,1/0,81
dijs_sdd:1,4/0,6/1,1/0,1/1,1/0,2/1,1/0,4/1,1/0,2/1,1/0,24/1,1/0,83
sigma-yyf:2,1/1,1/0,2/1,1/0,8/1,2/0,3/2,2/1,1/0,1/1,1/0,2/1,1/0,105
yrlpiao:2,1/1,2/2,8/1,1/2,2/1,1/0,1/2,1/0,2/2,1/0,1/1,1/0,2/1,1/0,1/1,1/0,7/1,1/0,4/1,1/0,5/1,1/0,5/2,2/1,1/0,9/2,4/0,64
lengnian:1,1/0,12/2,11/0,3/2,1/0,9/2,2/0,1/2,4/1,1/2,1/0,1/2,2/1,1/2,3/1,2/2,1/1,2/2,6/1,1/2,3/1,2/2,1/1,2/2,1/0,1/2,5/1,1/2,1/0,2/2,1/1,1/2,2/1,2/2,1/1,1/2,4/0,35
eunoiay:2,3/1,2/0,10/1,1/0,7/2,1/0,100
ran_zhi:1,1/0,1/1,4/2,1/1,1/0,3/1,1/0,1/1,2/0,108
xuwuze:1,2/0,118
tiger2005:2,70/0,49
zazhiii:1,2/0,53/1,2/0,58
lettera:1,2/2,1/1,3/0,15/1,1/2,1/1,3/2,2/0,3/1,1/0,2/1,1/0,1/1,6/0,2/1,1/2,1/1,1/2,2/0,2/1,4/0,2/2,1/1,1/2,1/1,1/0,1/1,3/2,1/0,1/1,1/0,3/1,1/0,1/1,1/0,2/2,2/1,1/0,1/2,1/0,1/2,2/1,1/0,1/2,4/0,1/1,1/2,2/1,1/2,2/0,1/2,11/1,1/2,1/1,2/2,2
metal_frog:1,1/0,30/2,9/1,1/2,23/0,1/2,1/1,1/2,7/1,4/0,8/2,3/1,1/2,1/0,7/2,1/0,15
zyc:1,1/0,111
alwaysce:1,1/2,1/1,3/2,1/1,2/2,1/1,2/2,3/1,1/2,5/1,1/2,1/1,1/2,5/1,1/2,1/0,5/2,4/1,2/2,11/1,1/2,11/1,1/2,4/1,1/2,42
sjohn:2,3/0,109
meikisisui:1,4/0,2/1,1/0,1/1,1/0,3/1,1/0,3/1,1/0,2/1,2/0,2/1,2/0,5/1,1/0,1/1,1/0,2/2,1/1,3/0,2/1,3/2,1/0,1/1,1/2,1/1,4/2,2/1,7/2,2/1,1/2,4/1,4/2,3/1,1/2,1/0,5/1,1/0,1/2,1/1,11/0,1/1,9/2,1/1,4
deemo_ml:1,7/0,104
dbwglx:1,1/0,110
kamtuo:2,30/1,1/2,16/0,1/1,1/2,4/0,1/2,5/0,1/2,5/0,1/1,1/0,1/2,4/1,1/2,4/1,1/2,5/1,1/2,1/0,8/1,1/2,1/0,1/2,1/0,1/2,1/1,1/0,4/2,3
kod:1,2/0,2/1,1/0,3/1,1/0,3/1,1/0,15/1,1/0,1/1,2/0,23/2,1/0,49
lyongwolf:1,1/0,1/1,1/2,4/1,10/0,5/1,1/0,2/1,1/0,78
liryc:1,16/2,2/1,6/2,1/1,6/2,1/1,1/2,1/1,26/2,1/1,5/0,1/1,2/2,1/1,3/2,1/1,11/2,2/1,17
arrogant_sword,cpp:1,1/0,103
kita_ikuyo:2,1/0,1/1,2/0,38/2,1/1,1/2,1/0,56
sbjohn:2,1/0,1/2,1/0,10/2,2/0,4/2,1/0,1/2,1/0,1/1,1/0,75
yefei:1,1/0,98
bond_james:1,1/2,3/0,10/1,2/0,3/1,1/0,2/1,1/0,1/1,1/0,4/1,1/0,66
crzhou:1,1/0,1/2,1/0,3/2,9/0,3/1,1/0,1/2,4/0,7/1,1/2,1/1,1/0,2/2,2/0,3/1,1/0,20/2,3/1,2/0,2/2,1/0,6/2,3/1,2/2,3/1,1/2,2/1,1/2,1/1,1/2,2/1,2/2,1
fancyalad:1,4/0,2/1,1/0,1/1,2/0,5/1,1/0,71
xzx:1,4/0,1/1,1/0,78
catchfree1225:2,5/1,1/2,2/1,1/2,1/1,1/0,2/2,4/1,1/2,2/1,4/2,2/1,4/2,2/1,10/2,1/0,1/1,5/0,34
mono_4:1,1/0,1/1,1/0,8/1,1/0,71
kamito:1,8/0,75
lengian:1,1/0,14/1,1/0,66
jun:2,1/0,80
innerworldexplorer:2,1/0,1/1,10/2,2/1,19/2,1/1,4/2,2/1,3/2,1/1,7/0,1/1,6/2,1/1,2/0,7/1,2/0,7
legnian:1,1/0,74
zrnstnsr:2,12/1,1/2,1/0,1/2,10/1,2/2,6/0,2/1,1/2,1/1,1/0,36
yunc:1,1/0,72
xiaoretaw:2,6/0,1/2,1/0,2/1,1/0,60
boulimhh:1,23/0,1/1,13/0,1/1,12/0,3/1,1/0,1/1,15
humn:1,1/0,67
sdjasj:1,3/0,7/2,1/1,1/0,56
zrnstnr:1,1/0,61
crzhou,py:1,1/0,61
stcnpc:1,3/0,2/1,1/0,6/1,1/0,49
kmiao:1,2/2,1/0,2/2,1/0,1/1,1/0,8/1,1/0,44
wanerovo:1,1/0,53
jackeyhua:1,2/2,1/1,5/0,46
yuexihuachen:1,1/0,5/1,2/0,44
bonelight:1,1/2,8/1,1/2,17/1,1/2,8/1,1/2,14
metal_grog:1,1/0,49
_boulimhh:1,1/0,46
javaminus:1,2/2,1/1,2/2,1/1,1/2,2/1,7/0,30
artoor:1,1/0,45
lettear:1,1/0,42
gaoeight:2,1/1,1/0,1/2,1/1,4/0,1/1,1/0,31
juyou:1,1/0,39
yui:1,5/0,1/1,1/0,1/1,2/0,1/1,7/2,1/1,7/2,1/0,8
helltractor:2,3/1,1/2,2/0,1/2,1/1,3/0,22
yuxue_r:1,8/0,10/1,11
syrus:1,1/0,28
liuxb:1,1/0,26
metal_forg:1,1/0,24
euphoriababy:2,1/0,22
sjw712cpp:1,1/0,20
lianxuhanshu:2,3/0,1/2,1/1,1/2,2/0,1/2,5/1,1/2,1/0,1/2,1/0,2
zar13:2,1/1,1/0,1/1,7/0,2/1,1/0,2/1,4
lovs_code_lx:1,1/0,17
legnli:1,1/0,16
songyl:1,1/0,15
xzx_com:1,9/2,1/1,2/0,1
qsmcgogo:1,2/0,8
zard13:1,1/0,3/1,1/0,5
charleschile:2,1/0,9
zard:1,1/0,8
lyxxxys:1,1/0,6
uy__uy:1,2/0,3/1,1/0,1
jkboy:1,1/0,1
skipped_dates:y2024,m3,0310172431,m4,07142128,m5,05121926,m6,0209162330,m7,07142128,m8,04111825,m9,0108152229,m10,061320
`;
